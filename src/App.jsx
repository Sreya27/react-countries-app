import { Fragment } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Card from "./components/Card";

const App = () => {
  return (
    <Fragment>
      <Header/>
      <section className="bg-gray-50">
        <Input/>
      </section>
      <section className="bg-gray-50 p-8 grid gap-y-10 gap-x-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </section>
    </Fragment>
  )
}

export default App
