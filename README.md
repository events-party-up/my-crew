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

10. Update the user's profile information
[PUT /api/v1/profile/update]

11. Update the user's password
[PUT /api/v1/profile/password]

<a name="v1m1"></a>
### 1. POST /api/v1/account/signup
Create a new account 

**body**
```
{
  name: "",
  email: "",
  password: ""
}
```
**output**
```
{
  userId: "",
  token: ""
}
```

<a name="v1m2"></a>
### 2. POST /api/v1/account/login
Log the user in 

**body**
```
{
  email: "",
  password: ""
}
```
**output**
```
{
  userId: "",
  token: ""
}
```

<a name="v1m3"></a>
### 3. DELETE /api/v1/account/delete
Delete the user's account
         
**query**
```
  token: "",
  userId: ""
```
**output**
```
{
  success: true
}
```

<a name="v1m4"></a>
### 4. GET /api/v1/event/list
         
**query**
```
  token: "",
  name: "",
  type: "",
  place: "",
  minprice: 0.0,
  maxprice: 0.0,
  openings: 0
```
**output**
```
[
  {
    name: "",
    type: "",
    description: "",
    lat: 0.0,
    lng: 0.0,
    price: 0.0,
    openings: 0
  }
]
```

<a name="v1m5"></a>
### 5. POST /api/v1/event/new

**query**
```
  token: "",
  userId: ""
```
**body**
```
{
  name: "",
  type: "",
  description: "",
  lat: 0.0,
  lng: 0.0,
  price: 0.0,
  openings: 0
}
```
**output**
```
{
  eventId: ""
}
```

