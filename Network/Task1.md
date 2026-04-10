# Session 14 Summary

## Why We Learn This
Understanding how frontend and backend communicate helps us see the full journey of a request — from the moment a user sends it until the response is returned.

---

## What is a Network?
A network is a group of devices connected together (wired or wireless) to share data.

- Sender: the device sending data  
- Receiver: the device receiving data  
- Protocols: rules that define how devices communicate  

---

## Protocols
Protocols are the language devices use to communicate. They define how data is sent, received, and formatted.

Types:
- HTTP/HTTPS → communication between frontend and backend  
- TCP → reliable but slower  
- UDP → faster but less reliable  
- SMTP → used for sending emails  

---

## Request–Response Cycle
1. User sends a request from frontend  
2. DNS resolves the domain to an IP  
3. Request passes through multiple layers  
4. Server processes the request  
5. Response returns back to the user  

---

## DNS
Converts domain names into IP addresses.

Example:
google.com → 142.250.190.78

---

## Ports
- 80 → HTTP  
- 443 → HTTPS  
- 3306 → MySQL  

---

## HTTP Request Structure
- Method  
- URL  
- Headers  
- Body (optional)  
- Query Parameters  

---

## HTTP Methods
- GET → retrieve data  
- POST → create data  
- PUT → update full record  
- PATCH → update partial data  
- DELETE → remove data  

---

## Parameters
- Path Parameters → required  
- Query Parameters → optional  

---

## Transport Layer
TCP vs UDP:

- TCP → reliable, ordered  
- UDP → faster, less reliable  

---

## Network Layer
Responsible for routing data using IP addresses.

---

## Server Processing
Server receives the request, processes it, and prepares a response.

---

## Response
Returns back through the same layers to the frontend.

Example:
HTTP/1.1 200 OK

{
  "message": "success"
}

---

## Status Codes
- 2xx → success  
- 3xx → redirection  
- 4xx → client error  
- 5xx → server error  

---

## Key Idea
Data moves from user to server and back again through organized layers.
