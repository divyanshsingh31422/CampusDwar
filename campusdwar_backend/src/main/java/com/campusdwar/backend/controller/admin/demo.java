package com.campusdwar.backend.controller.admin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

public class demo {
	@RestController
	public class HealthController {

	    @GetMapping("/health")
	    public String health() {
	        return "OK";
	    }
	}

}
