package net.gabriels.model;



import org.springframework.web.multipart.MultipartFile;


public class UserDetailDto {
	
	private int userId;
	private String userName;
	private String userAddress;
	private String userMail;
	private String userPhone;
	private MultipartFile userProfileImg;

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

	public MultipartFile getUserProfileImg() {
		return userProfileImg;
	}

	public void setUserProfileImg(MultipartFile userProfileImg) {
		this.userProfileImg = userProfileImg;
	}

}
