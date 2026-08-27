package main

import (
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Profile struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
}

type Projects struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Stack       string `json:"stack,omitempty"`
	Image       string `json:"image,omitempty"`
	Url		 	string `json:"url,omitempty"`
}

type Experience struct {
	Company     string `json:"company"`
	Role        string `json:"role"`
	Description string `json:"description"`
	Time        string `json:"time,omitempty"`
}

func main() {
	// Create a Gin router with default middleware (logger and recovery)
	r := gin.Default()

	// Enable CORS so the frontend can make requests to this API from a different origin
	r.Use(cors.Default())

	profile := Profile{
		Name:        "Ulisses Molina",
		Description: "Software Engineer at Auburn University.",
	}

	projects := []Projects{
		{
			Title:       "Trackr",
			Description: "Full Stack job application tracker with chrome extension",
			Stack:       "React, Node.js, PostgreSQL",
			Image:       "/trackr.png",
			Url: 	   	"https://github.com/UlissesMolina/Trackr.git",
		},
		{
			Title:       "World Cup Match Predictor",
			Description: "Predicts outcomes of 2026 World Cup matches",
			Stack:       "Python, Machine Learning",
			Image:       "/worldCup.png",
			Url: 	   	"https://github.com/UlissesMolina/worldCup.git",
		},
	}

	experience := []Experience{
		{
			Company:     "Auburn RFID Lab",
			Role:        "Student Software Developer",
			Description: "Developed and maintained internal tools for RFID systems",
			Time:        "August 2026 - present",
		},
		{
			Company:     "OCV, LLC",
			Role:        "Software Engineer Intern",
			Description: "Developed and maintained web and mobile applications using json, and cloud services.",
			Time:        "September 2025 - August 2026",
		},

		{
			Company:     "Room2Room Movers",
			Role:        "Software Engineer Intern",
			Description: "Developed and maintained web and mobile applications using React, TypeScript, and Firebase.",
			Time:        "January 2026 - May 2026",
		},
	}

	// Define a simple GET endpoint
	r.GET("/api/profile", func(c *gin.Context) {
		// Return JSON response
		c.JSON(http.StatusOK, profile)
	})

	r.GET("/api/projects", func(c *gin.Context) {
		// Return JSON response
		c.JSON(http.StatusOK, projects)
	})

	r.GET("/api/experience", func(c *gin.Context) {
		// Return JSON response
		c.JSON(http.StatusOK, experience)
	})

	// Start server on port 8080 (default)
	// Server will listen on 0.0.0.0:8080 (localhost:8080 on Windows)
	if err := r.Run(); err != nil {
		log.Fatalf("failed to run server: %v", err)
	}
}
