export type GetMeResponse = {
  userID: string;
  userName: string;
  email: string;
  cellPhone: string;
  idNumber: string;
  currentUserInfos: {
    userType: string;
    roleName: string;
  };
};
