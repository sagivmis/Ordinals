import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react"
import { UniSatBalance } from "../types"
interface Props {
  children: React.ReactNode
}

export interface IUniSatContext {
  unisatInstalled: boolean
  connected: boolean
  accounts: string[]
  publicKey: string
  address: string
  balance: UniSatBalance
  network: string
  unisat: any
  setUnisat: Dispatch<SetStateAction<any>>
  getBasicInfo: () => void
  handleAccountsChanged: (_accounts: string[]) => void
}

export const UniSatContext = React.createContext<IUniSatContext | null>(null)

const UniSatContextProvider: React.FC<Props> = ({ children }) => {
  const [unisatInstalled, setUnisatInstalled] = useState(false)
  const [connected, setConnected] = useState(false)
  const [accounts, setAccounts] = useState<string[]>([])
  const [publicKey, setPublicKey] = useState<string>("")
  const [address, setAddress] = useState<string>("")
  const [balance, setBalance] = useState<UniSatBalance>({
    confirmed: 0,
    unconfirmed: 0,
    total: 0
  })
  const [network, setNetwork] = useState("livenet")
  const [unisat, setUnisat] = useState((window as any).unisat)

  useEffect(() => {
    let interval: NodeJS.Timer
    if (!unisatInstalled) {
      interval = setInterval(() => {
        if (typeof unisat === "undefined") {
          setUnisat((window as any).unisat)
          setUnisatInstalled(true)
        }
      }, 500)
    }
    return () => clearInterval(interval)
  }, [unisat, unisatInstalled])

  const getBasicInfo = useCallback(async () => {
    const unisat = (window as any).unisat
    setUnisat(unisat)
    if (typeof unisat !== "undefined") {
      setUnisatInstalled(true)
    }
    const [newAddress] = await unisat.getAccounts()
    if (newAddress !== address) {
      setAddress(newAddress)

      const publicKey = await unisat.getPublicKey()
      setPublicKey(publicKey)

      const balance = await unisat.getBalance()
      setBalance(balance)

      const network = await unisat.getNetwork()
      setNetwork(network)
    }
  }, [address])

  useEffect(() => {
    console.log(balance)
    console.log(network)
    getBasicInfo()
  }, [balance, getBasicInfo, network])

  const selfAccountsRef = useRef<{ accounts: string[] }>({
    accounts: []
  })
  const selfAccounts = selfAccountsRef.current

  const handleAccountsChanged = useCallback(
    (_accounts: string[]) => {
      if (selfAccounts.accounts[0] === _accounts[0]) {
        // prevent from triggering twice
        return
      }
      selfAccounts.accounts = _accounts
      if (_accounts.length > 0) {
        setAccounts(_accounts)
        setConnected(true)

        setAddress(_accounts[0])

        getBasicInfo()
      } else {
        setConnected(false)
      }
    },
    [selfAccounts]
  )

  const handleNetworkChanged = useCallback((network: string) => {
    setNetwork(network)
    getBasicInfo()
  }, [])

  useEffect(() => {
    if (unisat) {
      setUnisatInstalled(true)
    } else {
      return
    }
    // unisat.getAccounts().then((accounts: string[]) => {
    //   handleAccountsChanged(accounts)
    // })

    unisat.on("accountsChanged", handleAccountsChanged)
    unisat.on("networkChanged", handleNetworkChanged)

    return () => {
      unisat.removeListener("accountsChanged", handleAccountsChanged)
      unisat.removeListener("networkChanged", handleNetworkChanged)
    }
  }, [handleAccountsChanged, handleNetworkChanged, unisat])

  return (
    <UniSatContext.Provider
      value={{
        accounts,
        address,
        balance,
        unisat,
        setUnisat,
        connected,
        network,
        publicKey,
        unisatInstalled,
        getBasicInfo,
        handleAccountsChanged
      }}
    >
      {children}
    </UniSatContext.Provider>
  )
}

export default UniSatContextProvider
