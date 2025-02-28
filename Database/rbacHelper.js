exports.checkPermission = (user, requiredRole) => {
    if (!user || user.role !== requiredRole) {
      throw new Error("Access Denied");
    }
  };
  