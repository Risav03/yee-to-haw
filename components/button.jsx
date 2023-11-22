"use client"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { createContext, useContext ,useState, useEffect} from "react";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { userAccount } from "@/app/Global_Redux/Reducers/Web3/click";
import {useDispatch } from "react-redux"


function Button(){



  const [accn,setAccn] = useState(null);
  const[first, setFirst] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();


  const { address, isConnecting, isDisconnected } = useAccount({
    onConnect: ({ address, isReconnected, connector: activeConnector }) => {
      setLoading(true);
      setAccn(address);
      dispatch(userAccount(address));
      // registerUser(address, userName);
    },
    onDisconnect() {
      setAccn(null);

    },
  });


    return (
      
<div className="">
        <ConnectButton.Custom className="">
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== "loading";
           const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === "authenticated");

            return (
              <div
                {...(!ready && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        onClick={openConnectModal}
                        type="button"
                        className="bg-white hover:bg-gray-300 px-7 py-4 border-4 border-black text-black min-[801px]:text-[2vw] text-[5vw] rounded-xl translate-y-8 relative z-50"
                      >
                        Connect Wallet
                      </button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <button
                        onClick={openChainModal}
                        type="button"
                        className="bg-red-500 hover:bg-red-700 px-7 py-4 border-4 border-black text-white min-[801px]:text-[2vw] text-[5vw] rounded-xl translate-y-10 relative z-50"
                      >
                        Wrong network
                      </button>
                    );
                  }

                  return (
                    <div style={{ display: "flex", gap: 12 }}>
                      <button
                        onClick={openChainModal}
                        style={{ display: "flex", alignItems: "center" }}
                        type="button"
                        className="translate-y-8"
                      >
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 40,
                              height: 40,
                              borderRadius: 999,
                              overflow: "hidden",
                              marginRight: 4,
                            }}
                          >
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? "Chain icon"}
                                src={chain.iconUrl}
                                style={{ width: 40, height: 40 }}
                              />
                            )}
                          </div>
                        )}
                        {/* {chain.name} */}
                      </button>

                      <button
                        onClick={openAccountModal}
                        type="button"
                        className="bg-white hover:bg-gray-300 px-7 py-4 border-4 border-black text-black min-[801px]:text-[1.5vw] text-[4vw] rounded-xl translate-y-8 relative z-50"
                      >
                       {accn?.slice(0,5)+"..."+accn?.slice(-4, accn.length)}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
       </div>

    );
    
}


export default Button;
