package com.app.pojos;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

//order_id	user_id / customer_id	user_id / delivery_boy_id	order_delivery_status	
//total_price	order_date	delivery_date
@Entity
public class Orders extends BaseEntity implements Serializable{
	@Enumerated(EnumType.STRING)
	private OrderStatus orderDeliveryStatus;
	private double totalPrice;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate orderDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate deliveryDate;
	private String razorpayPaymentId;
	 
    private String razorpayOrderId;
 
    private String razorpaySignature;
    private Long userId;
	public Long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}


	public Orders() {
		System.out.println("in ctor of "+getClass().getName());
	}
	
	
	


	@OneToMany(mappedBy = "selectedOrder", cascade = CascadeType.ALL, orphanRemoval = true)
	List<OrderDetails> orderDetails = new ArrayList<>();
	
	@ManyToOne
	@JoinColumn(name = "customer_id", nullable = false)
	private User selectedCustomer;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "delivery_boy_id", nullable = false)
	@JsonIgnore
	private User selectedDeliveryBoy;

	public OrderStatus getOrderDeliveryStatus() {
		return orderDeliveryStatus;
	}


	public String getRazorpayPaymentId() {
		return razorpayPaymentId;
	}


	public void setRazorpayPaymentId(String razorpayPaymentId) {
		this.razorpayPaymentId = razorpayPaymentId;
	}


	public String getRazorpayOrderId() {
		return razorpayOrderId;
	}


	public void setRazorpayOrderId(String razorpayOrderId) {
		this.razorpayOrderId = razorpayOrderId;
	}


	public String getRazorpaySignature() {
		return razorpaySignature;
	}


	public void setRazorpaySignature(String razorpaySignature) {
		this.razorpaySignature = razorpaySignature;
	}


	public void setOrderDeliveryStatus(OrderStatus orderDeliveryStatus) {
		this.orderDeliveryStatus = orderDeliveryStatus;
	}


	public double getTotalPrice() {
		return totalPrice;
	}


	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}


	public LocalDate getOrderDate() {
		return orderDate;
	}


	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}


	public LocalDate getDeliveryDate() {
		return deliveryDate;
	}


	public void setDeliveryDate(LocalDate deliveryDate) {
		this.deliveryDate = deliveryDate;
	}


	public List<OrderDetails> getOrderDetails() {
		return orderDetails;
	}

	@JsonIgnore
	public void setOrderDetails(List<OrderDetails> orderDetails) {
		this.orderDetails = orderDetails;
	}


	public User getSelectedCustomer() {
		return selectedCustomer;
	}

	@JsonIgnore
	public void setSelectedCustomer(User selectedCustomer) {
		this.selectedCustomer = selectedCustomer;
	}


	public User getSelectedDeliveryBoy() {
		return selectedDeliveryBoy;
	}


	public void setSelectedDeliveryBoy(User selectedDeliveryBoy) {
		this.selectedDeliveryBoy = selectedDeliveryBoy;
	}


	@Override
	public String toString() {
		return "Orders [orderDeliveryStatus=" + orderDeliveryStatus + ", totalPrice=" + totalPrice + ", orderDate="
				+ orderDate + ", deliveryDate=" + deliveryDate + "]";
	}


	public Long setUserId(Integer integer) {
		// TODO Auto-generated method stub
			return userId;
	}
	
	
}
