package net.gabriels.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import net.gabriels.configuration.Pagenation;
import net.gabriels.model.UserDetail;
import net.gabriels.model.UserDetailDto;


public interface UserService {
	
	public Pagenation getAllUserDetail(int pageNo, int pageSize);
	
	public UserDetail getUserDetailById(int id);
	
	public List<UserDetail> getAllUserDetailBasedOnFirstLetter(char ch);
	
	public String updateUserDetail(int id, UserDetailDto userDetailDto);
	
	public String addUserDetail(UserDetailDto userDetailDto, MultipartFile file);
	
	public String deleteUserDetail(int id);
	
	

}
