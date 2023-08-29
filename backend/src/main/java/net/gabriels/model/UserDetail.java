package net.gabriels.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "User_Table")
public class UserDetail {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	private String userName;
	private String userAddress;
	private String userMail;
	private String userPhone;
	@Lob
	private byte[] userProfileImg;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserAddress() {
		return userAddress;
	}

	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}

	public UserDetail(int userId, String userName, String userAddress, String userMail, String userPhone,
			byte[] userProfileImg) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userAddress = userAddress;
		this.userMail = userMail;
		this.userPhone = userPhone;
		this.userProfileImg = userProfileImg;
	}

	public String getUserMail() {
		return userMail;
	}

	public void setUserMail(String userMail) {
		this.userMail = userMail;
	}

	public String getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}

	public byte[] getUserProfileImg() {
		return userProfileImg;
	}

	public void setUserProfileImg(byte[] userProfileImg) {
		this.userProfileImg = userProfileImg;
	}

	@Override
	public String toString() {

		return "UserDetail[" + userId + " " + userName + " " + userAddress + " " + userMail + " " + userPhone;
	}

}
