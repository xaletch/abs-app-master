import { PasswordInput } from "@/components/atoms/password-input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { LoginSchema, LoginType } from "./schema";
import { useEffect } from "react";

export function LoginForm() {
  const form = useForm({
    resolver: yupResolver(LoginSchema),
  });

  useEffect(() => {
    toast.success("Тестовое уведомление");
    toast.info("Тестовое уведомление");
    toast.error("Тестовое уведомление");
    toast.warning("Тестовое уведомление");
  }, []);
  const onSubmit = async (data: LoginType) => {
    console.log(data);
  };
  return (
    <Card className="mx-auto max-w-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Авторизация</CardTitle>
        <CardDescription>
          Введите e-mail указаный при регистрации и пароль от аккаунта
        </CardDescription>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="login"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Логин</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Логин" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <FormLabel>Пароль</FormLabel>
                        <Link className="ml-auto inline-block text-sm underline">
                          Забыли пароль?
                        </Link>
                      </div>

                      <FormControl>
                        <PasswordInput {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full h-10">
                Войти
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Нет аккаунта?{" "}
              <Link to="/register" className="underline">
                Регистрация
              </Link>
            </div>
          </CardContent>
        </form>
      </Form>
    </Card>
  );
}
