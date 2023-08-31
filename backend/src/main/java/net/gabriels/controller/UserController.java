package net.gabriels.controller;

import java.io.IOException;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import net.gabriels.configuration.Pagenation;
import net.gabriels.model.UserDetail;
import net.gabriels.model.UserDetailDto;
import net.gabriels.service.UserService;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping(value = "/user")
public class UserController {
	@Autowired
	private UserService userService;

	@GetMapping(value = "/getAll")
	private ResponseEntity<Pagenation> getAllUserDetail(@RequestParam(value="pageNo",defaultValue="0",required=false) int pageNo,
			@RequestParam(value="pageSize",defaultValue="5",required=false) int pageSize) {

		return new ResponseEntity<>(userService.getAllUserDetail(pageNo, pageSize), HttpStatus.OK);

	}

	@GetMapping(value = "/get/{id}")
	private ResponseEntity<UserDetail> getUserDetailById(@PathVariable("id") int id) {
		UserDetail userDetail = userService.getUserDetailById(id);
		return new ResponseEntity<>(userDetail, HttpStatus.OK);

	}
	
	@GetMapping(value = "/getByLetter/{letter}")
	private ResponseEntity<List<UserDetail>> getAllUserDetailBasedOnFirstLetter(@PathVariable("letter") char letter) {

		List<UserDetail> userDetails = userService.getAllUserDetailBasedOnFirstLetter(letter);
		return new ResponseEntity<>(userDetails, HttpStatus.OK);

	}
 
	@PostMapping(value = "/add")
	private ResponseEntity<String> addUser(@ModelAttribute UserDetailDto userDetailDto) {
		
		MultipartFile file = userDetailDto.getUserProfileImg();
        
		return new ResponseEntity<>(userService.addUserDetail(userDetailDto, file), HttpStatus.CREATED);

	}
	
	@PutMapping(value = "/update/{id}")
	private ResponseEntity<String>  updateUserDetail(@PathVariable("id") int id, @ModelAttribute UserDetailDto userDetailDto) {

		return new ResponseEntity<>(userService.updateUserDetail(id, userDetailDto), HttpStatus.ACCEPTED);

	}

	@DeleteMapping(value = "/delete/{id}")
	private ResponseEntity<String>  deleteUser(@PathVariable("id") int id) {

	  return new ResponseEntity<>(userService.deleteUserDetail(id),  HttpStatus.OK);

	}

}
