import Counter from "./components/Counter";
import EmailInput from "./components/EmailInput";
import Employee from "./components/Employee";
import Greetings from "./components/Greetings";
import Header from "./components/Header";
import ListRendering from "./components/ListRendering";
import TermOfUse from "./components/TermOfUse";
import BSForm from "./components/forms/BSForm";
import ClassBasedFormSetState from "./components/forms/ClassBasedFormSetState";
import LoginForm from "./components/forms/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Parent from "./components/statelifting/Parent";
import NavBar from "./components/headers/NavBar";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import BookList from "./components/books/BookList";
import BookListItem from "./components/books/BookListItem";
import PageNotFound from "./components/PageNotFound";
import AddBook from "./components/books/AddBook";
import UpdateBook from "./components/books/UpdateBook";
import Cart from "./components/books/Cart";

const App = () => {
  const employee = {
    name: "mitali shah",
    salary: 78000,
    address: "pune",
  };
  const projectTitles = [
    "onlineshopping",
    "online banking",
    "portfolio management",
  ];
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/statelifting" element={<Parent />} />
        <Route path="/login" element={<BSForm />} />
        <Route path="/books" element={<BookList />}>
          <Route path=":id" element={<BookListItem />} />
          <Route path=":id/update" element={<UpdateBook />} />

          <Route path="add" element={<AddBook />} />
        </Route>

        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <section>
        <Outlet />
      </section>
      {/* <ListRendering />
      <BSForm />
 
      <ClassBasedFormSetState />
 
      <EmailInput />
      <TermOfUse />
 
     <Header />
      <Employee name={employee.name} address={employee.address} salary={employee.salary} />
 
    <h1>Hello World From React App Created Using CRA </h1>
    <input type='text' placeholder="enter your name" />
   
    <Greetings name='Anika' projecttitle={projectTitles[0]} />
    <Greetings name='Vishnupriya' projecttitle={projectTitles[1]}/>
    <Greetings name='Komal'projecttitle={projectTitles[2]}/>
 
    <Counter />
 */}
    </div>
  );
};

export default App;
