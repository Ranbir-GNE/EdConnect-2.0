"use server"

import { getSupabaseAuth } from "@/lib/auth";
import { getErrorMessage } from "@/lib/utils"


export const signUpAction = async (formData: FormData) => {
    try {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const { error } = await getSupabaseAuth().signUp({
            email,
            password,
        });
        if (error) throw error;

        const { data, error: loginError } =
            await getSupabaseAuth().signInWithPassword({
                email,
                password,
            });
        if (loginError) throw loginError;
        if (!data.session) throw new Error("No session");

        return { errorMessage: null };
    } catch (error) {
        return { errorMessage: getErrorMessage(error) };
    }
};

export const loginAction = async (formData: FormData) => {
    try {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const { data, error: loginError } =
            await getSupabaseAuth().signInWithPassword({
                email,
                password,
            });
        if (loginError) throw loginError;
        if (!data.session) throw new Error("No session");

        return { errorMessage: null };
    } catch (error) {
        return { errorMessage: getErrorMessage(error) };
    }
};

export const updateAction = async (formData: FormData) => {
    try {
        const user = getSupabaseAuth().getUser()
        if (!user) throw new Error("No user");

        const { error } = await getSupabaseAuth().updateUser({
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            data: {
                first_name: formData.get("firstName ") as string,
                last_name: formData.get("last_name") as string,
                address: formData.get("address") as string,
            },
        });
        if (error) throw error;

        return { errorMessage: null };
    } catch (error) {
        return { errorMessage: getErrorMessage(error) };
    }
};

export const signOutAction = async () => {
    try {
        const { error } = await getSupabaseAuth().signOut();
        if (error) throw error;

        return { errorMessage: null };
    } catch (error) {
        return { errorMessage: getErrorMessage(error) };
    }
};