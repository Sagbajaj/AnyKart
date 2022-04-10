package com.app.service;

import com.app.pojos.Orders;

public interface IOrderService {
	 public Orders saveOrder(final String razorpayOrderId, final Long userId);
	 public String validateAndUpdateOrder(final String razorpayOrderId, final String razorpayPaymentId, final String razorpaySignature, final String secret);
}
