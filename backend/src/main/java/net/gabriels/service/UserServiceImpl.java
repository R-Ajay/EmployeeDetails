package net.gabriels.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import net.gabriels.configuration.Pagenation;
import net.gabriels.model.UserDetail;
import net.gabriels.model.UserDetailDto;
import net.gabriels.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	private static final String directory = System.getProperty("user.dir") 
			                     + "\\src\\main\\resources\\static\\";

	/**
	 * To Retrive all the user details form DB
	 */
	@Override
	public Pagenation getAllUserDetail(int pageNo, int pageSize) {
		
		Pageable pageable=PageRequest.of(pageNo, pageSize);
		Page<UserDetail> page=userRepository.findAll(pageable);
		Pagenation pagenation=Pagenation.createPagenation(page);
		
		if(pagenation.getContent() == null || pagenation.getContent().isEmpty())
			throw new RuntimeException("Oops! No User Details is available in Database");
		return pagenation;
	}
	

	/**
	 * To Retrive particular user details form DB
	 */
	@Override
	public UserDetail getUserDetailById(int id) {

		UserDetail userDetail = userRepository.findById(id)
				.orElseThrow(()->{
			      throw new RuntimeException("Sorry! No data is available for this user id :" + id);
		});
		
		return userDetail;
	}
	
	
	/**
	 * To Retrive all the user details Based on firstletter form DB
	 */
	@Override
	public List<UserDetail> getAllUserDetailBasedOnFirstLetter(char ch) {
		List<UserDetail> userDetails = 
				userRepository.getAllUserDetailBasedFirstLetter(Character.toUpperCase(ch));
		
		if(userDetails == null || userDetails.isEmpty())
			throw new RuntimeException("Oops! No User Details is available in Database");
		return userDetails;
	}
	

	/**
	 * To Update particular user details in DB
	 */
	@Override
	public String updateUserDetail(int id, UserDetailDto userDetailDto) {

		UserDetail existingUserDetail = userRepository.findById(id)
				.orElseThrow(()->{
				  throw new RuntimeException("Sorry! No data is available for this user id :" + id);
				});
		
		UserDetail updateserDetail = mapToUserDetail(userDetailDto, userDetailDto.getUserProfileImg());
		        updateserDetail.setUserId(id);
				userRepository.save(updateserDetail);
		return "UserDetail is updated";
	}
	
	

	/**
	 *To add user detail in DB
	 */
	@Override
	public String addUserDetail(UserDetailDto userDetailDto, MultipartFile file) {

		UserDetail userDetail = null;
		userDetail = mapToUserDetail(userDetailDto, file);
		userRepository.save(userDetail);
		return "UserDetail is added to DB successfully";
	}
	
	

	/**
	 *To Delete particular user detail from DB
	 */
	@Override
	public String deleteUserDetail(int id) {

		UserDetail userDetail = userRepository.findById(id)
		    .orElseThrow(()->{
		       throw new RuntimeException("Sorry! No data is available for this user id :" + id);}
		);
		
		Path fileNameAndPath = Paths.get(directory, userDetail.getUserProfileImg());
		try {
			Files.delete(fileNameAndPath);
		} catch (IOException e) {
			e.printStackTrace();
		}
		userRepository.deleteById(id);
		return "User " + id + " is deleted successfully";
	}
	
	

	/**
	 * Map all the UserDetailDto to UserDetail
	 * @param userDetailDto
	 * @return
	 */
	private static UserDetail mapToUserDetail(UserDetailDto userDetailDto, MultipartFile file) {
		UserDetail userDetail = new UserDetail();

//		MultipartFile file = userDetailDto.getUserProfileImg();

		String fileName = String.valueOf(userDetailDto.getUserId())
				+ file.getOriginalFilename().substring(file.getOriginalFilename().length() - 4);

		Path fileNameAndPath = Paths.get(directory, fileName);

		try {
			Files.copy(file.getInputStream(), fileNameAndPath);
		} catch (IOException e) {
			e.printStackTrace();
		}
         
		
		userDetail.setUserName(userDetailDto.getUserName());
		userDetail.setUserPhone(userDetailDto.getUserPhone());
		userDetail.setUserAddress(userDetailDto.getUserAddress());
		userDetail.setUserMail(userDetailDto.getUserMail());
		userDetail.setUserProfileImg(fileName);
		userDetail.setDateUpdated(new Date());

		return userDetail;

	}

}
