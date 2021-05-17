/* /components/Layout.js */

import React from "react";
import Head from "next/head";
import Link from "next/link";

import { Container, Nav, NavItem } from "reactstrap";

export default function Layout(props) {
    const title = "Welcome to Nextjs";
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link 
                    rel="stylesheet" 
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" 
                    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" 
                    crossorigin="anonymous"
                />
                <script src="https://js.stripe.com/v3" />
            </Head>
            <header>
                <style jsx>
                    {`
                        a {
                            color: white;
                        }
                    `}
                </style>
                <Nav className="navbar navbar-dark bg-dark">
                    <NavItem>
                        <Link href="/">
                            <a className="navbar-brand">Home</a>
                        </Link>
                    </NavItem>

                    <NavItem className="ml-auto">
                        <Link href="/login">
                            <a className="nav-link">Sign In</a>
                        </Link>
                    </NavItem>

                    <NavItem>
                        <Link href="/register">
                            <a className="nav-link">Sign Up</a>
                        </Link>
                    </NavItem>
                </Nav>
            </header>
            <Container>{props.children}</Container>
        </div>
    );
}