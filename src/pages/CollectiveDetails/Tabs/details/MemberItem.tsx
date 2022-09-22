import React from "react";
import cn from "classnames";
import { MemberItemWrapper } from "../../styles";
import { formatBlockchainAddress } from "../../../../utils";

interface MemberItemProps {
  member: any;
  isTeamMember: boolean;
}

function MemberItem(props: MemberItemProps) {
  const { member, isTeamMember } = props;
  return (
    <MemberItemWrapper
      className={isTeamMember ? "teamMemberItem" : "memberItem"}
    >
      {member.image ? (
        <img
          className={isTeamMember ? "teamMemberImage" : "memberImage"}
          src={member.image}
          alt={"member_image"}
        />
      ) : (
        <div
          className={
            isTeamMember ? "teamMemberDefaultImage" : "memberDefaultImage"
          }
        />
      )}
      <div className={"memberName"}>
        {member.name ?? formatBlockchainAddress(member.address, 4, 4)}
      </div>
      <div>
        <span
          className={
            "memberType " +
            cn({
              adminTag: member.type === "Admin",
              coreTag: member.type === "Core",
              whaleTag: member.type === "Whale",
              memberTag: member.type === "Member",
            })
          }
        >
          {member.type.toUpperCase()}
        </span>
      </div>
    </MemberItemWrapper>
  );
}

export default MemberItem;
