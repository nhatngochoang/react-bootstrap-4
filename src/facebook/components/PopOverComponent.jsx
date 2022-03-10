import { OverlayTrigger, Popover } from "react-bootstrap";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PopOverComponent = () => (
   <OverlayTrigger
      trigger={["hover", "hover"]}
      placement="right" // top', 'right', 'bottom', 'left
      overlay={
         <Popover id="popover-basic">
            <Popover.Header as="h3">Popover right</Popover.Header>
            <Popover.Body>
               And here's some <strong>amazing</strong> content. It's very engaging. right?
            </Popover.Body>
         </Popover>
      }
   >
      <span>
         <FontAwesomeIcon icon={faCircleQuestion} />
      </span>
   </OverlayTrigger>
);
