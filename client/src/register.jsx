import React from "react";
import './reg.css'
import { Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader, Spinner } from "@nextui-org/react";
import { FormCreate } from "./hook_create";

export default function Registeruser() {
    const [selected, setSelected] = React.useState("login");
    const { formik_validate, loaddata } = FormCreate();
    return (
        <div className="xbodyreg">

            <div className="gradient-border ">
                <div className=" flex flex-col w-full contentoxini">

                    <Card className="max-w-full w-[340px] h-[450px]">
                        <CardBody className="overflow-hidden">
                            <Tabs
                                fullWidth
                                size="lg"
                                aria-label="Tabs form"
                                selectedKey={selected}
                                onSelectionChange={setSelected}
                            >
                                <Tab key="login" title="Acceder">
                                    <form className="flex flex-col gap-4">
                                        <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                                        <Input
                                            isRequired
                                            label="Password"
                                            placeholder="Enter your password"
                                            type="password"
                                        />
                                        <p className="text-center text-small">
                                            Need to create an account?{" "}
                                            <Link size="sm" onPress={() => setSelected("sign-up")}>
                                                Sign up
                                            </Link>
                                        </p>
                                        <div className="flex gap-2 justify-end">
                                            <Button fullWidth color="primary">
                                                Login
                                            </Button>
                                        </div>
                                    </form>
                                </Tab>
                                <Tab key="sign-up" title="Registro">
                                    <form className="flex flex-col gap-4 h-[300px]" onSubmit={formik_validate.handleSubmit}>
                                        <Input id="namex" name="namex" isRequired label="Name" placeholder="Enter your name" type="password"
                                            value={formik_validate.values.namex}
                                            onChange={formik_validate.handleChange}
                                            isInvalid={formik_validate.touched.namex && formik_validate.errors.namex}
                                            color={formik_validate.touched.namex && formik_validate.errors.namex ? "danger" : "success"}
                                            errorMessage={formik_validate.touched.namex && formik_validate.errors.namex}
                                        />
                                        <Input id="emailx" name="emailx" isRequired label="Email" placeholder="Enter your email" type="email"
                                            value={formik_validate.values.emailx}
                                            onChange={formik_validate.handleChange}
                                            isInvalid={formik_validate.touched.emailx && formik_validate.errors.emailx}
                                            color={formik_validate.touched.emailx && formik_validate.errors.emailx ? "danger" : "success"}
                                            errorMessage={formik_validate.touched.emailx && formik_validate.errors.emailx}
                                        />
                                        <Input id="passx" name="passx"
                                            isRequired
                                            label="Password"
                                            placeholder="Enter your password"
                                            type="password"
                                            value={formik_validate.values.passx}
                                            onChange={formik_validate.handleChange}
                                            isInvalid={formik_validate.touched.passx && formik_validate.errors.passx}
                                            color={formik_validate.touched.passx && formik_validate.errors.passx ? "danger" : "success"}
                                            errorMessage={formik_validate.touched.passx && formik_validate.errors.passx}
                                        />
                                        <p className="text-center text-small">
                                            Already have an account?{" "}
                                            <Link size="sm" onPress={() => setSelected("login")}>
                                                Login
                                            </Link>
                                        </p>
                                        <div className="flex gap-2 justify-end" >
                                            <Button fullWidth color="success" variant="faded" type="submit" isLoading={loaddata} spinner={<Spinner />}>

                                                {loaddata ? (<b>Save Data</b>) : (<b>New User</b>)}
                                            </Button>
                                        </div>
                                    </form>
                                </Tab>
                            </Tabs>
                        </CardBody>
                    </Card>
                </div>
            </div>




        </div>
    )
}

