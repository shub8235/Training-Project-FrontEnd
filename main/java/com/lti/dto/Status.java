package com.lti.dto;

import com.lti.entity.User;

public class Status {

	private boolean status;
	private String msg;

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

}


