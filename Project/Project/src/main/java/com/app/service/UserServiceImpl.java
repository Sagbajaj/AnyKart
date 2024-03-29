package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AddressRepository;
import com.app.dao.CategoryRepository;
import com.app.dao.OrdersRepository;
import com.app.dao.SupplierRepository;
import com.app.dao.UserRepository;
import com.app.dto.LoginRequest;
import com.app.dto.UserDTO;
import com.app.pojos.Address;
import com.app.pojos.Category;
import com.app.pojos.Orders;
import com.app.pojos.Role;
import com.app.pojos.Supplier;
import com.app.pojos.User;


@Service
@Transactional
public class UserServiceImpl implements IUserServices {
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private AddressRepository addressrepo;
	
	@Autowired
	private CategoryRepository cateRepo;
	
	@Autowired
	private SupplierRepository supRepo;
	
	@Autowired
	private OrdersRepository orderRepo;
	
	@Override
	public User authenticateUser(LoginRequest loginRequest) {
		return userRepo.authenticateUser(loginRequest.getEmail(), loginRequest.getPassword());
	}
	
	@Override
	public String createAccount(User user) {
		User u = userRepo.save(user);
		Address add = new Address();
		add.setCity("Pune");
		add.setState("Maharashtra");
		add.setCurrentUser(u);
		addressrepo.save(add);
		return "SignUp successfully";
	}
	
	@Override
	public User editProfile(int userId, UserDTO userDTO) {
		User user = userRepo.findById(userId).get();
		user.setFirstName(userDTO.getFirstName());
		user.setLastName(userDTO.getLastName());
		user.setPhone(userDTO.getPhone());
		return user;
	}
	
	@Override
	public String changePassword(int userId, String pwd) {
		User u = userRepo.findById(userId).get();
		u.setPassword(pwd);
		return "Password Changed successfully";
	}
	
	@Override
	public Address getAddress(int userId) {
		return addressrepo.findById(userId).get();
	}
	
	@Override
	public String editAddress(int userId, Address address) {
		Address add = addressrepo.findById(userId).get();
		System.out.println("address : "+add);
		if(add != null) {
		add.setArea(address.getArea());
		add.setCity(address.getCity());
		add.setFlatNo(address.getFlatNo());
		add.setPinCode(address.getPinCode());
		add.setSocietyName(address.getSocietyName());
		add.setState(address.getState());
		}
		return "Address Changed successfully";
	}
	
	@Override
	public List<User> getAllSupplier() {
		
		return userRepo.findByRole(Role.SUPPLIER);
	}
	
	@Override
	public List<User> getAllDeliveryBoy() {
		return userRepo.findByRole(Role.DELIVERY_BOY);
	}
	
	@Override
	public int addSupplierAccount(String categoryName, User user) {
		
		User u = userRepo.save(user);
		Address add = new Address();
		add.setCity("Pune");
		add.setState("Maharashtra");
		add.setCurrentUser(u);
		addressrepo.save(add);
		
		Category c = new Category();
		c.setCategoryName(categoryName);
		Category cat = cateRepo.save(c);
		
		Supplier supp = new Supplier();
		supp.setCurrentUser(u);
		supp.setSupplierCategory(cat);
		supRepo.save(supp);
		return supp.getCurrentUser().getId();
	}
	
	@Override
	public String deleteSupplierAccount(int id) {
		userRepo.deleteById(id);
		return "Supplier removed";
	}

	@Override
	public String deleteDelBoy(int id) {
		userRepo.deleteById(id);
		return "Delivery Boy Removed";
	}

	@Override
	public Address getAddressDetails(int orderId) {
		Orders od = orderRepo.findById(orderId).get();
		User u = od.getSelectedCustomer();		
		return addressrepo.findById(u.getId()).get();
	}
	
	@Override
	public User getUserDetails(int oId) {
		Orders o = orderRepo.findById(oId).get();
		System.out.println("User : "+o.getSelectedCustomer());
		return o.getSelectedCustomer();
	}
	
	@Override
	public List<Integer> findcount() {
		List<Integer>mylist=new ArrayList<>();
		Integer supplier = userRepo.findAllcountSupplier();
		Integer customer = userRepo.findAllcountCustomer();
		Integer delivery_boy= userRepo.findAllcountDeliveryBoy();
		Integer pendingOrders= userRepo.findAllcountPendingOrders();
		Integer deliveredOrders= userRepo.findAllcountDeliveredOrders();
		
		mylist.add(supplier);
		mylist.add(customer);
		mylist.add(delivery_boy);
		mylist.add(pendingOrders);
		mylist.add(deliveredOrders);
		System.out.println("-------------------");
		
		System.out.println(supplier +"  --Supplier---customer count -- "+customer);
		return mylist;
		
	}
}
