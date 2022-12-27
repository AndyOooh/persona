// @desc Create new user
// @route POST /api/auth/register
// @access Public
export const createUser = async () => {
  console.log('Hi from createUser');
};

// @desc get a user
// @route GET /api/users/:id
// @access Public
export const getUser = async () => {
  console.log('Hi from getUser');
};

// @desc update a user
// @route PUT /api/users/:id/update
// @access Private
export const updateUser = async () => {
  console.log('Hi from updateUser');
};

export const deleteUser = async () => {
  console.log('Hi from deleteUser');
};

export const getUsers = async () => {
  console.log('Hi from getUsers');
};
