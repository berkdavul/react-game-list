
export const nameValidator = (name) => {
    if (!name) return "name field is required.";
    return null;
  };

  export const iconValidator = (icon) => {
    if (!icon) return true;
    return null;
  };
  
  export const bundleValidator = (bundle) => {
    if (!bundle) return "Bundle is required.";
    if (
        !/^([A-Za-z]{1}[A-Za-z\d_]*\.)+[A-Za-z][A-Za-z\d_]*$/
        .test(String(bundle))
      )
      return "Bundle is not valid. Eg: bundle.com";
    return null;
  };
  
  export const emailValidator = (owner) => {
    if (!owner) return "email is requried.";
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(owner).toLowerCase()
      )
    )
      return "email is not valid.";
    return null;
  };