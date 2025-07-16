# Define required providers and versions
terraform {
  required_providers {
    render = {
      source  = "renderinc/render"  # Using Render's free tier
      version = "0.1.0"             # Specify provider version for stability
    }
  }
}

# Configure the Render provider with authentication
provider "render" {
  api_key = var.render_api_key  # Store API key as a variable
}

# Define a web service on Render's free tier
resource "render_service" "web_app" {
  name = "ci-demo-app"                                 # Service name
  type = "web_service"                                 # Type of service
  repo = "https://github.com/HovhannesHovsepyan/YOUR-REPO"  # Source repo
  env = "docker"                                       # Use Docker environment
  plan = "starter"                                     # Free tier plan
  branch = "main"                                      # Deploy from main branch
  build_command = "docker build -t app ."              # Build command
  start_command = "docker run -p 3000:3000 app"        # Start command
  auto_deploy = true                                    # Auto-deploy on commits
} 