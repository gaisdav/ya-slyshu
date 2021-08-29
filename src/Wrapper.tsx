import React, {FC} from "react";
import Header from "./sections/Header/Header";
import './wrapper.css'
import Main from "./sections/Main/Main";
import Author from "./sections/Author/Author";
// import Book from "./sections/Book";
import Buy from "./sections/Buy";

const Wrapper: FC = () => {
    return <div className="wrapper">
        <section id='header'>
            <Header/>
        </section>

        <section id='main'>
            <Main/>
        </section>

        <section id='author' >
            <Author/>
        </section>

        {/*<section id='book'>*/}
        {/*    <Book/>*/}
        {/*</section>*/}

        <section id='links'>
            <Buy/>
        </section>
    </div>
}

export default Wrapper