import { useFormik } from "formik";
import * as Yup from "yup";

export default function Subscribe() {
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid Email Address")
				.required("Required"),
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<form className="form-inline" onSubmit={formik.handleSubmit}>
			<input
				className={
					formik.touched.email && formik.errors.email
						? "form-control is-invalid"
						: "form-control is-valid"
				}
				name="email"
				id="email"
				placeholder="Your Email Address"
				type="email"
				onChange={formik.handleChange}
				value={formik.values.email}
			/>{" "}
			<button
				type="submit"
				value="submit"
				className="click-btn btn btn-default"
			>
				<span>subscribe</span>
			</button>{" "}
			<span className="invalid-feedback">
				{formik.touched.email && formik.errors.email ? (
					<span>{formik.errors.email}</span>
				) : null}
			</span>
			<div
				style={{
					position: `absolute`,
					left: `-5000px`,
				}}
			>
				<input
					name="b_36c4fd991d266f23781ded980_aefe40901a"
					tabIndex="-1"
					type="text"
				/>
			</div>
			<div className="info"></div>
		</form>
	);
}
