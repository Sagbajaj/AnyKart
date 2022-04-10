package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Orders;
import com.app.dao.OrdersRepository;
import com.app.payment.Signature;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class OrderServicesImpl {
	@Autowired
	private OrdersRepository orderRepository;

	@Transactional
	public Orders saveOrder(final String razorpayOrderId, final Integer integer) {
		Orders order = new Orders();
		order.setRazorpayOrderId(razorpayOrderId);
		order.setUserId(integer);
		return orderRepository.save(order);
	}

	@Transactional
	public String validateAndUpdateOrder(final String razorpayOrderId, final String razorpayPaymentId,
			final String razorpaySignature, final String secret) {
		String errorMsg = null;
		try {
			Orders order = orderRepository.findByRazorpayOrderId(razorpayOrderId);
			// Verify if the razorpay signature matches the generated one to
			// confirm the authenticity of the details returned
			String generatedSignature = Signature
					.calculateRFC2104HMAC(order.getRazorpayOrderId() + "|" + razorpayPaymentId, secret);
			if (generatedSignature.equals(razorpaySignature)) {
				order.setRazorpayOrderId(razorpayOrderId);
				order.setRazorpayPaymentId(razorpayPaymentId);
				order.setRazorpaySignature(razorpaySignature);
				orderRepository.save(order);
			} else {
				errorMsg = "Payment validation failed: Signature doesn't match";
			}
		} catch (Exception e) {
			log.error("Payment validation failed", e);
			errorMsg = e.getMessage();
		}
		return errorMsg;
	}
}
