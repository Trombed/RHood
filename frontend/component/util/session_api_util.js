const APIUtil = {
    signup: (user) => (
      $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user }
      })
    ),
  
    login: (user) => (
      $.ajax({
        method: "POST",
        url: "/api/session",
        data: { user }
      })
    ),
  
    logout: () => (
      $.ajax({
        method: "DELETE",
        url: "/api/session"
      })
    )
  }
  
  export default APIUtil;