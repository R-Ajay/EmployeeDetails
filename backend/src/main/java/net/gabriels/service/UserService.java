package net.gabriels.service;

import java.util.List;

import org.springframework.stereotype.Service;

import net.gabriels.model.UserDetail;


public interface UserService {
	
	public List<UserDetail> getAllUserDetail();
	
	public UserDetail getUserDetailById(int id);
	
	public String updateUserDetail(int id, UserDetail UserDetai);
	
	public String addUserDetail(UserDetail UserDetail);
	
	public String deleteUserDetail(int id);
	
	

}
