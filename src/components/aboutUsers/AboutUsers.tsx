import React from 'react'
import './AboutUsers.css'
import {useSelector} from 'react-redux'

export const AboutUsers: React.FC = () => {
  const user = useSelector((state: any) => state.user)

  return (
      <div className="aboutUser">
          <div className="aboutUser__photo">
              <i className="fas fa-circle"></i>
          </div>
          {user.map((item: any, index: number) => {
              return (
              <div key={index}>
                  <div className="aboutUser__data">
                      <h2>{item.name}</h2>
                      <h3>{item.position}</h3>
                      <p>{item.description}</p>
                  </div>
                  <ul className="aboutUser__contacts">
                      <li className="aboutUser__item">
                          <h4>Email</h4>
                          <span>{item.email}</span>
                      </li>
                      <li className="aboutUser__item">
                          <h4>Phone</h4>
                          <span>{item.phone}</span>
                      </li>
                      <li className="aboutUser__item">
                          <h4>Address</h4>
                          <span>{item.address}</span>
                      </li>
                      <li className="aboutUser__item">
                          <h4>Organization</h4>
                          <span>{item.organization}</span>
                      </li>
                  </ul>
              </div>
              )
          })}
      </div>
  )
}