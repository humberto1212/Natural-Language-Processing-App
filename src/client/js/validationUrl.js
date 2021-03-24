function validURL(str) {
    var validation = new RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
      if (validation.test(str))
      {
        return true;
      }
      else
      {
        return null;
      }
  }
  
  export { validURL };
