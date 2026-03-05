


export default function permission(requiredPermission) {
  return (req, res, next) => {
    const user = req.user;

    if (!user || !user.permissions) {
      return res.status(403).json({
        message: "Sem permissões",
      });
    }

    const hasPermission =
      user.permissions.includes(requiredPermission);

    if (!hasPermission) {
      return res.status(403).json({
        message: "Acesso negado",
      });
    }

    next();
  };
}