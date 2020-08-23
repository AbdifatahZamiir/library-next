import { useFormik } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
// 	const errors = {};

// 	if (!values.firstName) {
// 		errors.firstName = "Required";
// 	} else if (values.firstName.length > 15) {
// 		errors.firstName = "Must be 15 character or less";
// 	}

// 	if (!values.lastName) {
// 		errors.lastName = "Required";
// 	} else if (values.lastName.length > 15) {
// 		errors.lastName = "Must be 15 character or less";
// 	}

// 	if (!values.email) {
// 		errors.email = "Required";
// 	} else if (
// 		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
// 	) {
// 		errors.email = "Invalid Email Address";
// 	}

// 	return errors;
// };

export default function ContactForm() {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			message: "",
		},

		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(20, "Must be 20 character or less")
				.required("Required"),
			lastName: Yup.string()
				.max(20, "Must be 20 character or less")
				.required("Required"),
			email: Yup.string()
				.email("Invalid Email Address")
				.required("Required"),
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
			values.firstName = "";
			values.lastName = "";
			values.email = "";
			values.message = "";
		},
	});

	console.log(formik);
	return (
		<form
			className="row contact_form"
			id="contactForm"
			onSubmit={formik.handleSubmit}
		>
			<div className="col-md-6">
				<div className="form-group">
					<input
						type="text"
						className={
							formik.touched.firstName && formik.errors.firstName
								? "form-control is-invalid"
								: "form-control is-valid"
						}
						onBlur={formik.handleBlur}
						id="firstName"
						name="firstName"
						placeholder="Enter your First Name"
						onChange={formik.handleChange}
						value={formik.values.firstName}
					/>
					<div className="invalid-feedback">
						{formik.touched.firstName && formik.errors.firstName ? (
							<span>{formik.errors.firstName}</span>
						) : null}
					</div>{" "}
				</div>

				<div className="form-group">
					<input
						type="text"
						className={
							formik.touched.lastName && formik.errors.lastName
								? "form-control is-invalid"
								: "form-control is-valid"
						}
						onBlur={formik.handleBlur}
						onFocus={formik.handleFocus}
						id="lastName"
						name="lastName"
						placeholder="Enter your Last Name"
						onChange={formik.handleChange}
						value={formik.values.lastName}
					/>
					<div className="invalid-feedback">
						{formik.touched.lastName && formik.errors.lastName ? (
							<span>{formik.errors.lastName}</span>
						) : null}
					</div>
				</div>
				<div className="form-group">
					<input
						type="email"
						className={
							formik.touched.email && formik.errors.email
								? "form-control is-invalid"
								: "form-control is-valid"
						}
						onBlur={formik.handleBlur}
						id="email"
						name="email"
						placeholder="Enter email address"
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
					<div className="invalid-feedback">
						{formik.touched.email && formik.errors.email ? (
							<span>{formik.errors.email}</span>
						) : null}
					</div>
				</div>
			</div>
			<div className="col-md-6">
				<div className="form-group">
					<textarea
						className="form-control"
						name="message"
						id="message"
						rows="1"
						placeholder="Enter Message"
						onChange={formik.handleChange}
						value={formik.values.message}
					></textarea>
				</div>
			</div>
			<div className="col-md-12 text-right">
				<button
					type="submit"
					value="submit"
					className="btn primary-btn"
				>
					Send Message
				</button>
			</div>
		</form>
	);
}
