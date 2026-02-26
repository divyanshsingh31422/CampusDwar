package com.campusdwar.backend.dto;
public class ChangeEmailRequest {
    private String newEmail;
    private String otp;
	public String getNewEmail() {
		return newEmail;
	}
	public void setNewEmail(String newEmail) {
		this.newEmail = newEmail;
	}
	public String getOtp() {
		return otp;
	}
	public void setOtp(String otp) {
		this.otp = otp;
	}

    // getters & setters
    
    
}
