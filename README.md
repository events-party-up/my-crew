# My Crew Project

Simple project created to achieve some react-native knowlodge

## Rest Routes

##### Authentication

1. Signup user<br/>
[POST /api/v1/account/signup](#v1m1)

2. Login user <br/>
[POST /api/v1/account/login](#v1m2)

3. Delete the user's account<br/>
[DELETE /api/v1/account/delete](#v1m3)

##### Events

4. List of events (with optional filters)</br>
[GET /api/v1/event/list](#v1m4)

5. Create new event
[POST /api/v1/event/new](#v1m5)

6. Remove created event
[DELETE /api/v1/event/delete](#v1m6)

7. Update event
[PUT /api/v1/event/update](#v1m7)

8. User joins event
[POST /api/v1/event/join](#v1m8)

9. User leaves event
[DELETE /api/v1/event/leave](#v1m9)


##### Profile

<a name="v1m1"></a>
### 1. POST /api/v1/signup
Create a new account 


**body**
```
{
  "name": "",
  "email": "",
  "password": ""
}
```
**output**
```
{
  "userId": "",
  "token": ""
}
```
