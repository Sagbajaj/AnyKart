package com.app.dto.payment;

import lombok.Data;

@Data
public class PaymentResponse {
	private String razorpayOrderId;
	private String razorpayPaymentId;
	private String razorpaySignature;
}
