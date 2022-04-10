package com.app.payment;

import lombok.Data;

@Data
public class OrderRequest {
    private String customerName;
    private String email;
    private String phoneNumber;
    private String amount;
}
