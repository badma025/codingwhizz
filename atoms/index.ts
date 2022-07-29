import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'

export const isSubmittedState = atom ({
    key: "isSubmittedState",
    default: false,
})