//@ts-nocheck
import { useState } from "react";

import CreateThemeContent from "theme/components/CreateThemeContent"
import Dialog from 'theme/components/Dialog';


const CreateTheme = () => {

    const [showDialog, setShowDialog] = useState(false);
    const [newTheme, setNewTheme] = useState();

    const manageDialog = () => {
        setShowDialog(!showDialog);
    }

    const createTheme = (newTheme) => {
        console.log(newTheme);
        setShowDialog(false);
        setNewTheme(newTheme);
    }

    return (
        <>
            <h1>Theming System</h1>
            <p>
                Hey, There! It's great when the control is with you. The theming system
                helps you in building a theme of your choice and apply it to test live. Why
                wait? Just give it a try.
            </p>
            <button className="btn" onClick={manageDialog}>Create a Theme</button>
            <Dialog
                header="new theme"
                body={<CreateThemeContent create={createTheme} />}
                open={showDialog}
                callback={manageDialog} />
        </>
    )
}

export default CreateTheme;