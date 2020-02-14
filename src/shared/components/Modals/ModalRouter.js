import React from "react";
import { Switch, Route } from "react-router-dom";
import InviteReg from "./AdminSendInvite/InviteReg";
import SchematicUpload from "./JobSheet/Upload/UploadPDF";

const ModalRouter = () => {
    return (
        <Switch>
            <Route path="/invitereg" component={InviteReg} />
            <Route path="/schematicupload" component={SchematicUpload} />
        </Switch>
    );
};

export default ModalRouter;
