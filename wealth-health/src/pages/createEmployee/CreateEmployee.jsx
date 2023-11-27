import CreateEmployeeForm from "./createEmployeeForm/CreateEmployeeForm"
import "../../styles/sass/_main.scss"

export default function SignIn() {
    return <main className="main bg-dark">
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Create Employee</h1>
            <CreateEmployeeForm />
        </section>
    </main>
}