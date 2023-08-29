package net.gabriels.controller;

import java.io.IOException;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import net.gabriels.model.UserDetail;
import net.gabriels.model.UserDetailDto;
import net.gabriels.service.UserService;

@RestController
@RequestMapping(value = "/user")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping(value = "/getAll")
	private ResponseEntity<List<UserDetail>> getAllUserDetail() {

		List<UserDetail> userDetails = userService.getAllUserDetail();	
		return new ResponseEntity<>(userDetails, HttpStatus.OK);

	}

	@GetMapping(value = "/get/{id}")
	private ResponseEntity<UserDetail> getUserDetailById(@PathVariable("id") int id) {
		UserDetail userDetail = userService.getUserDetailById(id);
		return new ResponseEntity<>(userDetail, HttpStatus.OK);

	}

	@PostMapping(value = "/add")
	private ResponseEntity<String> addUser(@ModelAttribute UserDetailDto userDetailDto) {
		byte[] imageData = null;
		try {
			imageData = userDetailDto.getUserProfileImg().getBytes();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		UserDetail userDetail = new UserDetail(0, userDetailDto.getUserName(), userDetailDto.getUserAddress(), 
				userDetailDto.getUserMail(), userDetailDto.getUserPhone(), imageData);
		return new ResponseEntity<>(userService.addUserDetail(userDetail), HttpStatus.CREATED);

	}
	
	@PutMapping(value = "/update/{id}")
	private ResponseEntity<String>  updateUserDetail(@PathVariable("id") int id, @RequestBody UserDetail userDetail) {

		return new ResponseEntity<>(userService.updateUserDetail(id, userDetail), HttpStatus.ACCEPTED);

	}

	@DeleteMapping(value = "/delete/{id}")
	private ResponseEntity<String>  addUser(@PathVariable("id") int id) {

	  return new ResponseEntity<>(userService.deleteUserDetail(id),  HttpStatus.OK);


	}

}
