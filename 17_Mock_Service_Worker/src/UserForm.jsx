// UserForm.spec.jsx
export function UserForm({ userId }) {
  const { data: user, isLoading, isError } = useGetUserQuery(userId);
  const [updateUser, { isLoading: isSending, isSuccess }] =
    useUpdateUserMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (!user) {
      return;
    }

    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      await updateUser(formData);
      setFormErrors({});

      return;
    }

    setFormErrors(errors);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading user data.</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {formErrors.firstName && <p>{formErrors.firstName}</p>}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {formErrors.lastName && <p>{formErrors.lastName}</p>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <p>{formErrors.email}</p>}

        <button disabled={isSending} type="submit">
          Update User
        </button>
      </form>
      {isSuccess && <p>User has been updated</p>}
    </>
  );
}

function validateForm(formData) {
  const errors = {};

  if (!formData.firstName) {
    errors.firstName = "First name is required";
  }

  if (!formData.lastName) {
    errors.lastName = "Last name is required";
  }

  if (!formData.email.match(/\S+@\S+\.\S+/)) {
    errors.email = "Email is invalid";
  }
  return errors;
}

// api.js
export const api = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.example.com/api" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `/users/${id}`,
    }),
    updateUser: builder.mutation({
      query: (body) => ({ url: "/users", method: "PUT", body }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = api;
