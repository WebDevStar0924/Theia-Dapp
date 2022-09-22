import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import { useEffect } from "react";
import API from "../../api/api";
import { useDispatch } from "react-redux";
import { updateProfileData } from "./index";

export function useFetchProfile() {
  const { account } = useActiveWeb3React();
  const dispatch = useDispatch();
  useEffect(() => {
    if (account) {
      API.getProfile(account).then((res) => {
        if (res.data.success) {
          dispatch(updateProfileData(res.data.user));
        }
      });
    }
  }, [account]);
}
