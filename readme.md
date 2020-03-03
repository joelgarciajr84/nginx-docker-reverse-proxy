# Nginx as Reverse Proxy for Docker Containers

![enter image description here](https://i.imgur.com/NLkFBWE.png)

# About
This repository is an example of how to use NGINX Docker Container as a Reverse Proxy to another applications running in others Dockers containers. 

# What is a Reverse Proxy
Definition from NGINX page:

> A proxy server is a go‑between or intermediary server that forwards requests for content from multiple clients to different servers across the Internet. A  **reverse proxy server**  is a type of proxy server that typically sits behind the firewall in a private network and directs client requests to the appropriate backend server. A reverse proxy provides an additional level of abstraction and control to ensure the smooth flow of network traffic between clients and servers.

Common uses for a  [reverse proxy server](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)  include:

-   **Load balancing** – A reverse proxy server can act as a “traffic cop,” sitting in front of your backend servers and distributing client requests across a group of servers in a manner that maximizes speed and capacity utilization while ensuring no one server is overloaded, which can degrade performance. If a server goes down, the  [load balancer](https://www.nginx.com/solutions/adc/)  redirects traffic to the remaining online servers.
-   **Web acceleration** – Reverse proxies can compress inbound and outbound data, as well as cache commonly requested content, both of which speed up the flow of traffic between clients and servers. They can also perform additional tasks such as SSL encryption to take load off of your web servers, thereby  [boosting their performance](https://www.nginx.com/resources/glossary/web-acceleration/).
-   **Security and anonymity** – By intercepting requests headed for your backend servers, a reverse proxy server protects their identities and acts as an additional defense against security attacks. It also ensures that multiple servers can be accessed from a single record locator or URL regardless of the structure of your local area network.


# Containers
1. Nodejs `DC`App running at port 8191 and exposing an endpoint which receives a hero name and returns info about it.
2. Nodejs `Marvel` App running at port 8192 and exposing an endpoint which receives a hero name and returns info about it.
3. NGINX Container working as a reverse proxy listening at port 8080.

# How it works

 Nginx will work as a reverse proxy for every request, so, instead of make a request to `http://localhost:8191/get-hero/` or `http://localhost:8191/get-hero`, it is possible to make a direct request to `http://localhost:8080/marvel/get-hero`or `http://localhost:8080/marvel/get-hero` . Nginx will intercept the request and make a proxy_pass to the specific container.

# How to run

 1. Git clone this repository
 2. Access the directory
 3. run `docker-compose up -d`
 4. Make a POST request for `http://localhost:8080/marvel/get-hero` or `http://localhost:8080/dc/get-hero` with the JSON similar to this: `{
	"superhero":"spider"
}`
 

# What you should see
A response similar to this:
`[
  {
    "superhero": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "characters": "Peter Parker"
  }
]`
