package net.gabriels.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.gabriels.model.UserDetail;
import net.gabriels.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public List<UserDetail> getAllUserDetail() {

		List<UserDetail> userDetails = userRepository.findAll();
		return userDetails;
	}

	@Override
	public UserDetail getUserDetailById(int id) {

		UserDetail userDetail = userRepository.findById(id).orElseThrow();
		return userDetail;
	}

	@Override
	public String updateUserDetail(int id, UserDetail userDetai) {

		UserDetail existingUserDetail = userRepository.findById(id).orElseThrow();
		UserDetail updateserDetail = userRepository.save(userDetai);
		return "UserDetail is updated";
	}

	@Override
	public String addUserDetail(UserDetail userDetai) {
		userRepository.save(userDetai);
		return "UserDetail is added to DB successfully";
	}

	@Override
	public String deleteUserDetail(int id) {

		userRepository.deleteById(id);
		return "User " + id + " is deleted successfully";
	}

}
