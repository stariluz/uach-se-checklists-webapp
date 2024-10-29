import { Icon12Hours, IconPencilPlus } from "@tabler/icons-react";
import Button from "../Buttons/Button";

import "./ButtonsDev.css"

const ButtonsDev = () => {
    return <ul>
        <li>
            <Button
                icon={<IconPencilPlus />}
            >
            </Button>
            <Button
                onClick={() => console.log("Button clicked")}
            >
                Holaa
            </Button>
            <Button
                iconPos={"left"}
                icon={<Icon12Hours />}
                onClick={() => console.log("Button clicked")}
            >
                Holaa
            </Button>
            <Button
                iconPos={"right"}
                icon={<Icon12Hours />}
            >
                Holaa
            </Button>
        </li>
        
        <li>
            <Button
                className="btn-secondary"
                icon={<IconPencilPlus />}
            >
            </Button>
            <Button
                className="btn-secondary"
                onClick={() => console.log("Button clicked")}
            >
                Holaa
            </Button>
            <Button
                className="btn-secondary"
                iconPos={"left"}
                icon={<Icon12Hours />}
                onClick={() => console.log("Button clicked")}
            >
                Holaa
            </Button>
            <Button
                className="btn-secondary"
                iconPos={"right"}
                icon={<Icon12Hours />}
            >
                Holaa
            </Button>
        </li>

        <li>
            <Button
                className="btn-danger"
                icon={<IconPencilPlus />}
            >
            </Button>
            <Button
                className="btn-danger"
                onClick={() => console.log("Button clicked")}
            >
                Holaa
            </Button>
            <Button
                className="btn-danger"
                iconPos={"left"}
                icon={<Icon12Hours />}
                onClick={() => console.log("Button clicked")}
            >
                Holaa
            </Button>
            <Button
                className="btn-danger"
                iconPos={"right"}
                icon={<Icon12Hours />}
            >
                Holaa
            </Button>
        </li>
    </ul>
}
export default ButtonsDev;