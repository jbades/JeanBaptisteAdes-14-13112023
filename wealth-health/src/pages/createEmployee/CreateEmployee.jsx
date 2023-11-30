import CreateEmployeeForm from "./createEmployeeForm/CreateEmployeeForm"
import "../../styles/sass/_main.scss"

export default function SignIn() {
    return <main className="main bg-dark">
        <section className="sign-in-content container mt-5">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h3 className="modal-title mb-4">Create Employee</h3>
            <CreateEmployeeForm />
        </section>
    </main>
}