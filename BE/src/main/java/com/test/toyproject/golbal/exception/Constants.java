package com.test.toyproject.golbal.exception;

public class Constants {

    public enum ExceptionClass {
        PRODUCT("Product"), ORDER("Order");

        private String exceptionClass;

        ExceptionClass(String exceptionClass) {
            this.exceptionClass = exceptionClass;
        }

        public String getExceptionClass() {
            return exceptionClass;
        }

        public String toString() {
            return getExceptionClass() + "Exception";
        }
    }
}
