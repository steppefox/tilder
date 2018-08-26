function apiProject(req, res) {
  const { projectId } = req.params;

  res.json({
    groups: [
      { id: `${projectId}-some.name`, },
      { id: `${projectId}-group2`, },
      { id: `${projectId}-group3`, },
    ]
  });
}

module.exports = apiProject;
